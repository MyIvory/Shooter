import { Button, Input, Modal } from 'antd';
import $ from "jquery"
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const { TextArea } = Input;


const EditModal = (props) => {
    const { t } = useTranslation();
    const loc = useLocation()

    return (
        <>
            <Modal title= {`Редактировать страницу ${t(`search.${loc.pathname.split("/").pop()}.title`)}`}
                open={props.isModalOpen}
                onOk={props.closeModal}
                onCancel={()=>{
                   $("#edit_text_area").val("")
                }}
                >               
               <TextArea id="edit_text_area" rows={8} size='large'></TextArea>
            </Modal>
        </>
    )
}

export default EditModal;