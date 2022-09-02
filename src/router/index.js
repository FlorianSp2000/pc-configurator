import {createRouter, createWebHistory} from "vue-router";

import FertigePcs from "@/pages/FertigePcs.vue";
import PcSelbstKonfigurieren from "@/pages/PcSelbstKonfigurieren.vue";
import UebersichtCpuKompabilitaet from "@/pages/UebersichtCpuKompabilitaet.vue";
import PcKonfigurator from "@/pages/PcKonfigurator";


const router = createRouter({
    //optionen
    history: createWebHistory(),
    routes: [

        {
            path: "/",
            component: PcKonfigurator,
            name:'Startseite'
        },
        {
            path: "/FertigePcs",
            component: FertigePcs,
            name: "fertig"
        },
        {
            path: "/PcSelbstKonfigurieren",
            component: PcSelbstKonfigurieren,
            name:'PcSelbstKonfigurieren'
        },
        {
            path: "/UebersichtCpuKompabilitaet",
            component: UebersichtCpuKompabilitaet,
        },
    ]
});

export default router;