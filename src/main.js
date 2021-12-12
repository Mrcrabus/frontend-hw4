import * as ArticlesModel from './hw4/articles';

function main() {
    ArticlesModel.all(function (articles) {
        console.log('articles count = ' + articles.length);

        let ind = Math.floor(Math.random() * articles.length);
        console.log('select index ' + ind + ', id = ' + articles[ind].id)

        return ArticlesModel.one(ind)

    })
        .then((article) => {
                console.log(article);
                return ArticlesModel.remove(article.id)
            }
        ).then(() => {
            console.log('что с удалением? - ' + res);
            return ArticlesModel.all()
        }
    ).then((articles) => {
        console.log('articles count = ' + articles.length);
    })

        .catch(error => {
            console.log(error)
        })


}

main();


// ArticlesModel.all((articles) => {
//     console.log('articles count = ' + articles.length);
//
//     // берём случайный индекс
//     let ind = Math.floor(Math.random() * articles.length);
//     console.log('select index ' + ind + ', id = ' + articles[ind].id)
//
//     // получаем статью по id
//     ArticlesModel.one(articles[ind].id, (article) => {
//         console.log(article);
//
//         // пробуем удалить её
//         ArticlesModel.remove(article.id, (res) => {
//             console.log('что с удалением? - ' + res);
//
//             // а сколько статей в базе сейчас
//             ArticlesModel.all((articles) => {
//                 console.log('articles count = ' + articles.length);
//             }, (error) => {
//                 console.log(error + ' in articles list after delete');
//             });
//         }, (error) => {
//             console.log(error + ' in articles delete');
//         })
//
//     }, (error) => {
//         console.log(error + ' in articles one');
//     });
//
// }, (error) => {
//     console.log(error + ' in articles list');
// });


// ArticlesModel.all((articles) => {
//     console.log('articles count = ' + articles.length);
//
//     let ind = Math.floor(Math.random() * articles.length);
//     console.log('select index ' + ind + ', id = ' + articles[ind].id)
//
//     return ArticlesModel.one(ind)
//
// })
//     .then((item) => {
//         console.log(item);
//         return ArticlesModel.remove(item.id)
//     })
//     .then((res) => {
//             console.log('что с удалением? - ' + res);
//         }
//     )
//     .catch((error) => {
//         console.log(error);
//     })


