import Router from 'koa-router'

const router = new Router();

router.get('/', ctx => {
  ctx.body = 'this a users response!';
});

router.post('/', ctx => {

})

export default router