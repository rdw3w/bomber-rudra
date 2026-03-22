import { NextResponse } from 'next/server';
import { recordApiUsage } from '@/lib/store';

export async function POST(req: Request) {
  let endpoint = 'unknown';
  try {
    const body = await req.json();
    endpoint = body.endpoint;
    const { method, headers, payload } = body;

    const startTime = Date.now();
    
    // Add a 10-second timeout to prevent hanging requests
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const fetchOptions: RequestInit = {
      method: method || 'GET',
      headers: headers || {},
      signal: controller.signal,
    };

    if (method !== 'GET' && method !== 'HEAD' && payload) {
      const contentTypeKey = Object.keys(headers || {}).find(k => k.toLowerCase() === 'content-type');
      const contentType = contentTypeKey ? headers[contentTypeKey] : '';

      if (typeof payload === 'string') {
        fetchOptions.body = payload;
      } else if (contentType.includes('application/x-www-form-urlencoded')) {
        // Convert object to URLSearchParams correctly
        const params = new URLSearchParams();
        for (const key in payload) {
            params.append(key, typeof payload[key] === 'object' ? JSON.stringify(payload[key]) : String(payload[key]));
        }
        fetchOptions.body = params.toString();
      } else {
        fetchOptions.body = JSON.stringify(payload);
      }

      if (!contentTypeKey) {
        fetchOptions.headers = {
          ...fetchOptions.headers,
          'Content-Type': 'application/json'
        };
      }
    }

    const response = await fetch(endpoint, fetchOptions);
    clearTimeout(timeoutId);
    
    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      try {
        data = await response.json();
      } catch (e) {
        data = await response.text();
      }
    } else {
      data = await response.text();
    }

    const endTime = Date.now();
    const responseTime = endTime - startTime;

    recordApiUsage(endpoint, response.ok, responseTime);

    return NextResponse.json({
      success: response.ok,
      status_code: response.status,
      response_time: responseTime,
      endpoint,
      data,
    });
  } catch (error: any) {
    recordApiUsage(endpoint || 'unknown', false, 0);
    return NextResponse.json({
      success: false,
      status_code: 500,
      response_time: 0,
      endpoint: '',
      error: error.message,
    }, { status: 500 });
  }
}
