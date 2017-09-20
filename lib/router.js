//blog/:postId
//console.log("Yeah! We are on the post:", params.postId);
FlowRouter.route('/', {
    action: function(params, queryParams) {
				BlazeLayout.render('layout_login', { main: "login" });
    }
});

FlowRouter.route('/bitacora', {
    action: function(params, queryParams) {
				BlazeLayout.render('layout_bitacora', { top: "navbar", main: "bitacora" });
    }
});

FlowRouter.route('/admin/cliente', {
    action: function(params, queryParams) {
				BlazeLayout.render('layout_bitacora', { top: "navbar", main: "cliente" });
    }
});

FlowRouter.route('/admin/servidor', {
    action: function(params, queryParams) {
				BlazeLayout.render('layout_bitacora', { top: "navbar", main: "servidor" });
    }
});

FlowRouter.route('/seguridad/usuario', {
    action: function(params, queryParams) {
				BlazeLayout.render('layout_bitacora', { top: "navbar", main: "usuario" });
    }
});

FlowRouter.route('/estadisticas/totalsms', {
    action: function(params, queryParams) {
				BlazeLayout.render('layout_bitacora', { top: "navbar", main: "totalsms" });
    }
});
