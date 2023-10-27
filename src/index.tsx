import ReactDOM from "react-dom/client"
import { ModalState } from "./context/ModalContext"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <BrowserRouter>
    <ModalState>
      <App />
    </ModalState>
  </BrowserRouter>
)
