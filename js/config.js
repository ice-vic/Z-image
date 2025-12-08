// Configuration for Z-Image API
// Note: In a production environment, these values should be loaded from a secure backend
// For demo purposes, you can update these values directly or use a proxy server

// API Configuration - Update these values or load from environment
const CONFIG = {
    // Primary Image Generation API
    imageApi: {
        url: 'https://api.siliconflow.cn/v1/images/generations',
        key: 'sk-gffvslaiesaueihepijwvpzrcblkxxgtlgvkgakpjcvvuzqt',
        timeout: 60000,
        retries: 3
    },

    // Alternative APIs
    apis: {
        openai: {
            url: 'https://api.openai.com/v1/images/generations',
            key: ''
        },
        stability: {
            url: 'https://api.stability.ai/v1/generation',
            key: ''
        },
        midjourney: {
            url: 'https://api.midjourney.com/v2',
            key: ''
        }
    },

    // Default generation parameters
    defaultParams: {
        model: 'Qwen/Qwen2-VL-72B-Instruct',
        width: 1024,
        height: 1024,
        steps: 20,
        guidance: 7.5,
        count: 1
    },

    // Current active API (can be 'primary', 'openai', 'stability', 'midjourney', 'custom')
    activeApi: 'primary',

    // Maximum concurrent requests
    maxConcurrentRequests: 5
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else if (typeof window !== 'undefined') {
    window.API_CONFIG = CONFIG;
}

// Helper function to switch active API
function switchActiveApi(apiName) {
    if (CONFIG.apis[apiName] || apiName === 'primary') {
        CONFIG.activeApi = apiName;
        console.log(`Switched to ${apiName} API`);
        return true;
    }
    console.error(`Unknown API: ${apiName}`);
    return false;
}

// Helper function to get current API configuration
function getCurrentApiConfig() {
    if (CONFIG.activeApi === 'primary') {
        return CONFIG.imageApi;
    }
    return CONFIG.apis[CONFIG.activeApi] || null;
}

// Export helper functions
if (typeof window !== 'undefined') {
    window.switchActiveApi = switchActiveApi;
    window.getCurrentApiConfig = getCurrentApiConfig;
}