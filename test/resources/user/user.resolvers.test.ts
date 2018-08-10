import { db } from "../../test-utils";

describe('User', () => {

    beforeEach(() => {

        return db.Comment.destroy({ where: {} })
            .then((rows: number) => db.Post.destroy({ where: {} }))
            .then((rows: number) => db.User.destroy({ where: {} }))
            .then((rows: number) =>
                db.User.create({
                    name: 'Jonas',
                    email: 'jonas@email.com',
                    password: '1234'
                }
                ));
    });

    describe('Queries', () => {

        describe('application/json', () => {

            describe('users', () => {

                


            });

        });

    });

});