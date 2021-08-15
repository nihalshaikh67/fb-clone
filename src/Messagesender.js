import { Avatar, IconButton, Modal } from '@material-ui/core';
import React, { useState } from 'react';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import './css/messagesende.css';



const Messagesender = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () =>{
        setOpen(true);
    }

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <div className="modal_pop">
                    <form>
                        <div className="modalHeading">
                            <h3>Create Post</h3>
                            <IconButton onClick={handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <div className="modalHeader_top">
                            <Avatar/>
                            <h5>Nihal Shaikh</h5>
                        </div>
                        <div className="modalBody">
                            <textarea rows="5" placeholder="What's on your mind Nihal ? " ></textarea>
                        </div>
                        <div className="modalFooter">
                            <div className="modalFooter_Left">
                                <h4>Add to your post</h4>
                            </div>
                            <div className="modalFooter_Right">
                               <IconButton>
                                  <PhotoLibraryIcon fontSize="large" style={{color:'green'}}/>
                               </IconButton>
                               <IconButton>
                                  <VideoCallIcon fontSize="large"  style={{color:'red'}}/>
                               </IconButton>
                               <IconButton>
                                  <InsertEmoticonIcon fontSize="large"  style={{color:'#ffb100'}}/>
                               </IconButton>
                            </div>
                        </div>
                        <input type="submit" className="post_submit" value="POST"></input>
                    </form>
                </div>
            </Modal>
            <div className="messageSender">

                <div className="messageSender_top">

                    <Avatar />
                    <form>
                        <input type="text" placeholder="What's on your mind Nihal" onClick={handleOpen} />
                    </form>
                </div>

                <div className="messageSender_bottom">

                    <div className="messangerOption">
                        <VideoCallIcon style={{ color: 'red' }} fontSize="large" />
                        <p>Live Video</p>
                    </div>

                    <div className="messangerOption">
                        <PhotoLibraryIcon style={{ color: 'lightgreen' }} fontSize="large" />
                        <p>Photo/Video</p>
                    </div>

                    <div className="messangerOption">
                        <InsertEmoticonIcon style={{ color: '#ffb100' }} fontSize="large" />
                        <p>Feeling/Activity </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Messagesender;
