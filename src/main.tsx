import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import U from './compuntes/user.tsx'
import Admin from './compuntes/admin.tsx'
import Arr from './compuntes/array.tsx'
createRoot(document.getElementById('root')!).render(
    <>
        <App />
        <U name="mallikarjun" age="21" />
        <Admin />
        <Arr />
    </>
)