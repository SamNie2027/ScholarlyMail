import { Schema } from 'mongoose';

/**
 * Mongoose schema for a user
 * 
 * This schema defines the structure for storing users in the database.
 * Each user includes the following fields:
 *  - `username`: the username of the user
 *  - `first`: the user's first name
 *  - `last`: the user's last name
 *  - `email`: the user's email
 *  - `configuration`: the user's mailing configurations
 */
const userSchema: Schema = new Schema(
{
    username: {
        type: String,
    },
    first: {
        type: String,
    },
    last: {
        type: String,
    },
    email: {
        type: String,
    },
    configuration: {
        type: { type: Schema.Types.ObjectId, ref: 'Configuration' },
    }
}
);

export default userSchema;