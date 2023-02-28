# Axios Interceptor Suite

Axios Interceptor Suite is a collection of useful interceptors to make axios experience more pleasant when working with realtime API's.

## Installation

```sh
npm i @tqman/axios-interceptor-suite # npm
pnpm i @tqman/axios-interceptor-suite #pnpm
yarn add  @tqman/axios-interceptor-suite # yarn
```

## Usage

```ts
import axios from "axios"

import { createRateLimitInterceptor,
	createRetryInterceptor,
	AxiosRateLimitRequestConfig,
	AxiosRetryRequestConfig } from "@tqman/axios-interceptor-suite"

// make your axios instance
const axiosInstance = axios.create() // ofcourse you will provide your base config

// rate limit interceptor to send at most 6 requests per 2 seconds.
// overhead request will be delayed until next interval. Make sure originator of request is slower than the rate limit on average.
const { id, eject } = createRateLimitInterceptor(axiosInstance, {
	count: 6;
	interval: 2 * 1000;
})


// retry interceptor to retry failed requests 2 times with delay of 1 second between each.
createRetryInterceptor(axiosInstance, {
	count: 2;
	delay: 1 * 1000; // delay can be function also: (retryCount) => (1 + 2 ** retryCount) * 1000
})

// make you requests (with rate limit and retry)
axiosInstance.get("https://example.com")

// make request without rate limit
axiosInstance.get("https://example.com", { bypassRateLimit: true } as AxiosRateLimitRequestConfig)

// make request without retry on failure
axiosInstance.get("https://example.com", { retry: false } as AxiosRetryRequestConfig)

// change retry config for specific request & disable rate limit
axiosInstance.get("https://example.com", { retry: { count: 5 }, bypassRateLimit: true } as AxiosRetryRequestConfig & AxiosRateLimitRequestConfig)


// eject rate limit interceptor
eject()

```
