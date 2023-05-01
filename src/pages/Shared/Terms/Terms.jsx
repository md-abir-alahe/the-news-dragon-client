/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>terms and condition</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, commodi iste id officiis illo quos aliquid corrupti deserunt blanditiis quaerat asperiores incidunt veniam alias exercitationem ratione. Consectetur natus, facere, iste eveniet quia laboriosam accusamus rerum beatae officia quam delectus. Quaerat non pariatur cumque a, voluptate perspiciatis repudiandae? Nam, labore quisquam! Possimus veniam maxime rerum nostrum! Natus, cum. Hic, quia quibusdam.</p>
            <p>Go back to <Link to={`/register`}>Register</Link></p>
        </div>
    );
};

export default Terms;