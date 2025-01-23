import React from 'react';
import DepartmentCard from './DepartmentCard';

const departments = [
    { id: 1, name: 'Football', description: 'Football gear and accessories' },
    { id: 2, name: 'Basketball', description: 'Basketball equipment' },
    { id: 3, name: 'Running', description: 'Running shoes and apparel' }
];

const DepartmentList = () => {
    return (
        <div>
            <h2>Departments</h2>
            {departments.map((dept) => (
                <DepartmentCard key={dept.id} department={dept} />
            ))}
        </div>
    );
};

export default DepartmentLis