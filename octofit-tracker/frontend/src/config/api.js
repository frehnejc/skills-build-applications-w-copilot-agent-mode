// VITE_CODESPACE_NAME must be defined in the environment (e.g. octofit-tracker/frontend/.env.local)
// so the app can reach the Codespaces-forwarded backend at port 8000.
// See .env.local.example for the expected variable.
const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

// Fallback to localhost avoids building an invalid "https://undefined-8000..." URL.
export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

export function apiUrl(resource) {
  return `${apiBaseUrl}/api/${resource}/`;
}
