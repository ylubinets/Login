import { useDispatch } from 'react-redux';
import s from './Logout.module.css'
import { logout } from "../../Redux/actions";

function Logout() {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className={`${s.btn} ${s.mainPageBtn}`}
        onClick={() => {
          dispatch(logout())
        }}
      >
        Logout
      </button>
    </>
  );
}

export default Logout;