import { useEffect } from 'react';

const Message = ({type, status, setShowMessage}) => {
    
    const messages = {
        success: {
            post: 'Se ha dado de alta a la persona de forma exitosa',
            put: 'Se ha modificado a la persona de forma exitosa'
        },
        error: {
            post: '¡Error! No se ha podido dar de alta a la persona',
            put: '¡Error! No se ha de podido modificar a la persona'
        }
    }

    const styles = {
        success: 'w-50 text-center p-3 text-white bg-success',
        error: 'w-50 text-center p-3 text-white bg-danger'
    }

    const getStatus = () => {
        switch (status) {
            case 200:
                return 'success';
            case 400:
            case 500:
                return 'error';
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
    }, []);
    
    return (
        <div className="d-flex justify-content-center">
            <p className={styles[getStatus()]}>{messages[getStatus()][type]}</p>
        </div>
    );
}
 
export default Message;