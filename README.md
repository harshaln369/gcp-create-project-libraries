# gcp-create-project-libraries
Used to create gcp project using client libraries node

    error ====>  Error: 7 PERMISSION_DENIED: Service accounts cannot create projects without a parent.
    at Object.callErrorFromStatus (/home/harshal/Downloads/practice/node/gcp-project-agent/node_modules/@grpc/grpc-js/build/src/call.js:31:26)
    at Object.onReceiveStatus (/home/harshal/Downloads/practice/node/gcp-project-agent/node_modules/@grpc/grpc-js/build/src/client.js:180:52)
    at Object.onReceiveStatus (/home/harshal/Downloads/practice/node/gcp-project-agent/node_modules/@grpc/grpc-js/build/src/client-interceptors.js:365:141)
    at Object.onReceiveStatus (/home/harshal/Downloads/practice/node/gcp-project-agent/node_modules/@grpc/grpc-js/build/src/client-interceptors.js:328:181)
    at /home/harshal/Downloads/practice/node/gcp-project-agent/node_modules/@grpc/grpc-js/build/src/call-stream.js:187:78
    at processTicksAndRejections (node:internal/process/task_queues:78:11) {
  code: 7,
  details: 'Service accounts cannot create projects without a parent.',
  metadata: Metadata {
    internalRepr: Map(1) { 'grpc-server-stats-bin' => [Array] },
    options: {}
  }
}
  
