import { Schema } from 'mongoose';

/**
 * Mongoose schema for a mailing configuration
 * 
 * This schema defines the structure for storing users' custom
 * configurations for mailing articles in the database.
 * Each configuration includes the following fields:
 * - `frequency`: the frequency of the emails (daily is the most frequent)
 * - `time`: the desired time for the emails in UTC, consisting of:
 *      - `hour`: the hour in UTC military time: ranges from 0 to 23 (inclusive)
 *      - `minute`: the minutes in UTC, ranging from 0 to 59
 * - `keywords`: a list of keywords to match (at least one must match)
 */
const configurationSchema: Schema = new Schema(
{
    frequency: {
        type: String,
        enum: Object.values(Frequency),
        default: Frequency.DAILY,
    },
    time: {
        hour: {
            type: Number,
            default: 8,
            validate: {
                validator: function (value) {
                    return value % 1 === 0 && value >= 0 && value < 24;
                },
                message: 'Hour must be an integer from [0, 24]'
            }  
        },
        minute: {
            type: Number,
            default: 0,
            validate: {
                validator: function (value) {
                    return value % 1 === 0 && value >= 0 && value < 60;
                },
                message: 'Minute must be an integer from [0, 60]'
            }  
        }
    },
    keywords: [{ type: String }],
}
);