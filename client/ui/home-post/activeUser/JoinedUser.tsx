import React from "react";
import { FC } from "react";

const JoinedUser: FC<{ joinedUser: number }> = ({ joinedUser }) => {
    return (
        <div>
            {joinedUser === 0
                ? "нет участников"
                : joinedUser === 1
                ? `${joinedUser} участник`
                : joinedUser > 1 && joinedUser < 5
                ? `${joinedUser} участника`
                : `${joinedUser} участников`}
        </div>
    );
};

export default JoinedUser;
