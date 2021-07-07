import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import axios from '@/plugins/axios'
import _ from "lodash"
import Swal from 'sweetalert2'
import {Core} from '@/vuexes/core'

@Module({generateMutationSetters: true})
class CoreModule extends VuexModule {
  //state
  public courses:any = []
  public languages:any = []
  public vocabularies:any = []
  public senses:any = []
  public exercises:any = []

 public async getData(){
     this.languages = await Core.getHttp(`/api/language/`)
     this.courses = await Core.getHttp(`/api/course/`)
     this.vocabularies = await Core.getHttp(`/api/vocabulary/`)
     this.senses = await Core.getHttp(`/api/senses/`)
     this.exercises = await Core.getHttp(`/api/exercise/`)
 }


 




}

import store from "@/vuexes"
export const Course = new CoreModule({store, name: "Course"})