import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/layout";
import Consultation from "./features/consultation";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Consultation />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
