import { createRouter,createWebHistory } from "vue-router";
import Users from "@/pages/Users.vue";
import Index from "@/pages/Index.vue";
import ShowTable from "@/components/users/ShowTable.vue";
import ShowPosts from "@/components/posts/ShowPosts.vue";
import Posts from "@/pages/Posts.vue";
const routes = [
    {path: '/', name: Index, component: Index},

    {path: '/users', name: Users, component: Users, children:[
        {path: '', name: ShowTable, component: ShowTable}
    ]},
    
    {path: '/posts', name: Posts, component: Posts, children:[
        {path: '', name: ShowPosts, component: ShowPosts}
    ]}
];

const router = createRouter({
    routes,
    history:createWebHistory()
});

export default router;