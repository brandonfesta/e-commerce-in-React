import { useNavigate } from "react-router-dom"


export default function HeaderButton({content}){
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

