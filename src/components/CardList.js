import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            id={robots[i].id}
                            email={robots[i].email}
                            name={robots[i].name}
                            key={robots[i].id}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;
