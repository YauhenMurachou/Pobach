import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = () => {
	return <div className={classes.dialogs}>
		<div className={classes.dialogsItems} >
			<div className={classes.dialog}>
				Yauhen
			</div>
			<div className={classes.dialog + ' ' + classes.active}>
				Volha
			</div>
			<div className={classes.dialog}>
				Alena
			</div>
			<div className={classes.dialog}>
				Mikalay
			</div>
			<div className={classes.dialog}>
				Nina
			</div>
			<div className={classes.dialog}>
				Vasil
			</div>
		</div>
		<div className={classes.messages}>
			<div className={classes.message}>
				You're a woman
			</div>
			<div className={classes.message}>
				I'm a man
			</div>
			<div className={classes.message}>
				This is more than just a game
			</div>
		</div>
	</div>
};

export default Dialogs;