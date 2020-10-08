import React from 'react';
import Buttons from '../Buttons';
import './../../styles/notfound.css';

const action4 = () => console.log('action 4');

export default function NotFound() {
	return (
		<div>
			<div>
				<div className="test">
					{' '}
					<img className="nfpic" src="./../../assets/img/notfoundpic.jpg" alt="" />{' '}
				</div>
			</div>

			<Buttons className="button button-primary white" text="Retour" callback={action4} />
		</div>
	);
}
