import {VuexModule, Module, Mutation, Action} from "vuex-class-modules";
import axios from '@/plugins/axios'
import _ from "lodash"
import Swal from 'sweetalert2'
import moment from 'moment'
@Module({generateMutationSetters: true})
class CoreModule extends VuexModule {
  //state
  private token: string | null = null;
  public Hi:String | null = null;
  public alert:any = Swal


  async getHttp(url:string):Promise<any>{
    return  await axios.get(url).then((r)=>{return r.data}).catch((e)=>{this.error(); return e.response.data})
  }

  async postHttp(url:string,form:object):Promise<any>{
    return  await axios.post(url,form).then((r)=>{return r.data}).catch((e)=>{
      console.log(e)
      this.error(); return e.response.data})
  }

  async putHttp(url:string,form:object):Promise<any>{
    return  await axios.put(url,form).then((r)=>{return r.data}).catch((e)=>{this.error(); return e.response.data})
  }

  async deleteHttp(url:string):Promise<any>{
    return  await axios.delete(url).then((r)=>{return r.data}).catch((e)=>{this.error(); return e.response.data})
  }

  async getChoice(name:string):Promise<any>{
    return await this.getHttp(`/api/choice/?name=${name}`)
  }

  async getGeo():Promise<any>{
    return await this.getHttp('/api/geo/')
  }

  
  public fillData(arr:any,key:string,val:any){
    return _.find(arr,(r)=>{ return r[key] == val  })
  }

  async getBase64(file:any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  convertDate(date:any) {
    return moment(date).format('DD/MM/YYYY');
}

  async error(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Cannot loading Data', 
    })
  }

  async success(){
    Swal.fire({
      icon: 'success',
      title: 'Process is Success',
      text: 'Data is loading complete', 
    })
  }





}

import store from "@/vuexes"
export const Core = new CoreModule({store, name: "Core"})