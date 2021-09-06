import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
	return <div className={classes.dialog}>
		<NavLink to={'/Dialogs/' + props.id}>{props.name}</NavLink>
	</div>
}

const Message = (props) => {
	return <div className={classes.message}>
		{props.message}
	</div>
}

const Dialogs = (props) => {
	return <div className={classes.dialogs}>
		<div className={classes.dialogsItems} >
			<DialogItem name='Volha' id='2' />
			<DialogItem name='Alena' id='3' />
			<DialogItem name='Mikalay' id='4' />
			<DialogItem name='Nina' id='5' />
			<DialogItem name='Vasil' id='6' />
		</div>
		<div className={classes.messages}>
			<Message message='You are woman' />
			<Message message='I am a man' />
			<Message message='This is more than just a game' />
			<Message message='New message' />
			<Message message='Hello!' />
		</div>
	</div>
};

export default Dialogs;