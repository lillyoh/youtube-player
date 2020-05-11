import React, { useState } from 'react';

const SearchBar = ({ searchVideos }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		searchVideos(searchTerm);
	};

	return (
		<div className='ui segment'>
			<form className='ui form' onSubmit={handleSubmit}>
				<div className='field'>
					<label>Youtube Search</label>
					<input type='text' value={searchTerm} placeholder='Enter a search term' onChange={handleChange} />
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
