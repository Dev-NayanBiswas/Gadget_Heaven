import { useNavigate } from "react-router-dom"
import imageURL from "../Utils/Scripts/imageURL"
import { useContext } from "react";
import { CartContext } from "../Utils/Context/allContext";

function Modal({taka,onClose}){
    const {cart,setCart, setTotalPrice} = useContext(CartContext)
    const navigate = useNavigate();
    function resetter(){
        let copyArr = [...cart];
        copyArr.length = 0;
        setCart(copyArr)
        setTotalPrice(0)
        navigate("/")
        onClose()
    }
  return (
    <>
    <section className="fixed top-0 bottom-0 left-0 right-0 h-screen bg-gray-800/85 z-20">
        <section className="relative">
        <section className="absolute w-full h-full -top-1/2 left-1/2 -translate-x-1/2 bg-red-500 z-50 -translate-y-1/2 grid place-items-center">
        <section className="h-fit bg-white/50 rounded-xl p-4 w-4/12 absolute top-[390px] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <section className="bg-white/95 text-center rounded-xl p-4">
                    <figure className="text-center w-full mx-auto flex justify-center items-center my-8">
                        <img className="" src={imageURL("Group.png")} alt="" />
                    </figure>
                    
                    <p className="text-2xl font-sans font-bold text-gray-600/65">Payment Successfully</p>
                    <div className="border-b border-gray-500/20 w-7/12 mx-auto my-3"></div>
                    <p className="font-semibold text-black/25">Thanks for Purchasing</p>
                    <p className="text-sm text-gray-800 font-semibold flex items-center justify-center my-2 gap-2">Total : <span className="text-lg text-gray-800/45 font-bold">$ {taka}</span></p>
                    <button onClick={resetter} className="shadow-inset-lg bg-gray-400/40 rounded-e-full rounded-s-full
                     text-gray-800/30 px-20 py-1 font-bold tracking-wider btn_anim">Close</button>
            </section>
        </section>
        </section>
        </section>
    </section>
    </>
  )
}

export default Modal