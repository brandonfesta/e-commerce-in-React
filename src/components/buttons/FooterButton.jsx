import { useNavigate } from "react-router-dom"


export default function FooterButton({content}){
    const navigate = useNavigate()

    function redirect(content){
      navigate("/"+content)
    }

   return (
      <button onClick={() => redirect(content)}>
        {content}
      </button>
   )
};

