import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { setupTools } from './register-tools';

export let mcpServer: Server | null = null;

export const getMcpServer = () => {
  // Create a fresh server instance per transport connection.
  // Reusing a connected instance can fail with:
  // "Already connected to a transport..."
  const server = new Server(
    {
      name: 'ChromeMcpServer',
      version: '1.0.0',
    },
    {
      capabilities: {
        tools: {},
        resources: {},
        prompts: {},
      },
    },
  );

  setupTools(server);
  mcpServer = server;
  return server;
};
