import { Button, Input, message, Modal } from "antd";
import $ from "jquery";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const { TextArea } = Input;

const EditModal = (props) => {
    const { t } = useTranslation();
    const loc = useLocation()
    return (
        <>
            <Modal title={`${props.data.header} ${t(`search.${loc.pathname.split("/").pop()}.title`)}`}
                open={props.isModalOpen}
                closable={false}
                footer={[
                    <Button key="cancel" onClick={props.closeModal}>
                        {props.data.cancel_but}
                    </Button>,
                    <Button key="clear" onClick={() => {
                        $("#edit_text_area").val("")
                    }}>
                        {props.data.clear_but}
                    </Button>,
                    <Button
                        key="send"
                        type="primary"
                        onClick={() => {
                            let val = $("#edit_text_area").val()
                            if (val) {
                                $.ajax({
                                    type: "POST",
                                    url: "/backend/send_mail.php",
                                    data: {
                                        message: val,
                                        page: t(`search.${loc.pathname.split("/").pop()}.title`)
                                    },
                                    success: function (data) {
                                        if (data === "OK") {
                                            props.closeModal()
                                            message.info(props.data.message_ok)
                                        } else {
                                            message.error("Error send mail")
                                        }
                                    }
                                })
                            } else {
                                message.info(props.data.message_fail)
                            }

                        }}
                    >
                        {props.data.send_but}
                    </Button>,
                ]}
            >
                <TextArea id="edit_text_area" rows={8} size='large'></TextArea>
            </Modal>
        </>
    )
}
//step
export default EditModal;
