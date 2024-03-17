import Products from "./products";
// ami ekhane products namok jsx(component) take main.jsx jeta main r ekhane du jaygay import korlam..tar result ta brpwser a show koeche.mane ami akta component ke main.jsx charao onno r akta component er modhe dhokate pari.

function App() {
  const userName = 'somnath'
  return (
    <div className='w-full h-screen bg-slate-900	'>
      <div className="w-full h-32 bg-red-600">its made with vite</div>
      <h1>{userName}</h1>
      <Products/>
    </div>
  )
}

export default App;


