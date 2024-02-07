import { AuthProvider } from "@/app/(providers)/_contexts/auth.context";
import Header from "./_components/Header";
import TILTab from "./_components/TILTab";
import { Provider } from "react-redux";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div id="root">
        <Header />
        <TILTab />
        {children}
      </div>
    </AuthProvider>
  );
}

export default RootLayout;
