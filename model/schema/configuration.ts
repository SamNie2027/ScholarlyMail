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
 *  - `dateStartRange`: The desired starting range for articles to be published after
 *      - `day`: the day of the month
 *      - `month`: the month number (1 to 12)
 *      - `year`: the year (1 to present day 2000s year)
 * - `subject`: the subject number of the articles to return according to scopus' subject classifications:  
 *    https://api.elsevier.com/content/subject/scopus?httpAccept=text/xml
 * - `searchParams`: Search parameters with keywords and (AND, OR, AND NOT, ect.)
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
    dateStartRange: {
        day: {
            type: Number,
            default: 0,
        },
        month: {
            type: Number,
            default: 0,
        }, 
        year: {
            type: Number,
            default: 1,
        },
    },
    dateEndRange: {
        day: {
            type: Number,
            default: 0,
        },
        month: {
            type: Number,
            default: 0,
        }, 
        year: {
            type: Number,
            default: 1,
        },
    },
    subject: { 
        type: Number,
    },
    searchParams: [{ type: String }],
}
);