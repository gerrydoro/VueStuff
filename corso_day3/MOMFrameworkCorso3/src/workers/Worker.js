// src/workers/apiWorker.js
import axios from 'axios';

self.onmessage = async (e) => {
  console.log('Worker received message:', e.data);
  const { action = '', url, method = 'get', data = null, headers = {}, timeOut = 5000 } = e.data;
  try {
    if (action === 'testMessage') {
      self.postMessage({ success: true, message: 'Worker is running!' });
    }
    else {
      axios({ url, method, data, headers }, {
        signal: AbortSignal.timeout(timeOut)
      }).then(res => {
        console.log('Worker received response:', res.data);
        self.postMessage({ success: true, data: {}, action: action });
      }).catch(err => {
        self.postMessage({
          success: false,
          error: err.message,
          status: err.response?.status || null
        });
      }
      ).finally(() => {
        console.log('Worker finished processing:', action);
      }
      );
    }
  } catch (err) {
    self.postMessage({
      success: false,
      error: err.message,
      status: err.response?.status || null
    });
  }
};
