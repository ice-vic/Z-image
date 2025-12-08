// Configuration for Z-Image API
// Note: In a production environment, these values should be loaded from a secure backend
// For demo purposes, you can update these values directly or use a proxy server

// API Configuration - Update these values or load from environment
const CONFIG = {
    // Primary Image Generation API
    imageApi: {
        url: process.env.IMAGE_API_URL || 'https://api.example.com/generate',
        key: process.env.IMAGE_API_KEY || '',
        timeout: parseInt(process.env.API_TIMEOUT) || 30000,
        retries: parseInt(process.env.API_RETRIES) || 3
    },

    // Alternative APIs
    apis: {
        openai: {
            url: process.env.DALLE_API_URL || 'https://api.openai.com/v1/images/generations',
            key: process.env.DALLE_API_KEY || ''
        },
        stability: {
            url: process.env.STABILITY_API_URL || 'https://api.stability.ai/v1/generation',
            key: process.env.STABILITY_API_KEY || ''
        },
        midjourney: {
            url: process.env.MIDJOURNEY_API_URL || 'https://api.midjourney.com/v2',
            key: process.env.MIDJOURNEY_API_KEY || ''
        }
    },

    // Default generation parameters
    defaultParams: {
        model: process.env.DEFAULT_MODEL || 'z-image-turbo',
        width: parseInt(process.env.DEFAULT_WIDTH) || 1024,
        height: parseInt(process.env.DEFAULT_HEIGHT) || 1024,
        steps: parseInt(process.env.DEFAULT_STEPS) || 8,
        guidance: parseFloat(process.env.DEFAULT_GUIDANCE) || 3.0,
        count: 1
    },

    // Current active API (can be 'primary', 'openai', 'stability', 'midjourney', 'custom')
    activeApi: 'primary',

    // Maximum concurrent requests
    maxConcurrentRequests: parseInt(process.env.MAX_CONCURRENT_REQUESTS) || 5
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