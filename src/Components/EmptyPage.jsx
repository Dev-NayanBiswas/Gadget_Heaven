import { useNavigate } from "react-router-dom"

function EmptyPage({msg}) {
    const navigate = useNavigate();
  return (
    <>
        <section className=" w-full">
            <section>
                <section>
                        <h1 className="text-5xl text-red-500 font-bold text-center my-4">{msg}</h1>
                </section>
                <section className="text-center my-10">
                    <button onClick={()=>navigate("/")} className="btn_primary text-[var(--primary-color)] border-[3px] border-[var(--primary-color)]" style={{fontSize:20}}>Go Back Home</button>
                </section>
            </section>
        </section>
    </>
  )
}

export default EmptyPage