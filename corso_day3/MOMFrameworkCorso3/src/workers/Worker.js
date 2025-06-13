// src/workers/apiWorker.js
import axios from 'axios';

self.onmessage = async (e) => {
  const { url, method = 'get', data = null, headers = {} } = e.data;
  try {
    const res = await axios({ url, method, data, headers });
    self.postMessage({ success: true, data: res.data });
  } catch (err) {
    self.postMessage({
      success: false,
      error: err.message,
      status: err.response?.status || null
    });
  }
};
