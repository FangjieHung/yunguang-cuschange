/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Custom packages
import {
  PagingRequest, PagingResponse, UploadFormReq,
  BuildCompBundleDto, BuildCompBundleReq, BuildCompBundleView,
  BuildComponentDto, BuildComponentReq, BuildComponentView,
  BuildProjectDto, BuildProjectReq, BuildProjectView,
  BuildProjDocDto,
  BuildProjRenderDto, BuildProjRenderReq, BuildProjRenderView,
  BuildProjVolumeDto, BuildProjVolumeReq, BuildProjVolumeView
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class BuildProjectApiServ {
  private readonly baseUrl = '/BuildProject';

  constructor(private http: HttpClient) { }

  //#region BuildCompBundle
  getBuildCompBundleDtoById(id: number): Observable<BuildCompBundleDto> {
    return this.http.get<BuildCompBundleDto>(`${this.baseUrl}/GetBuildCompBundleDtoById/${id}`);
  }
  getBuildCompBundleViewById(id: number): Observable<BuildCompBundleView> {
    return this.http.get<BuildCompBundleView>(`${this.baseUrl}/GetBuildCompBundleViewById/${id}`);
  }
  getBuildCompBundleViews(request: BuildCompBundleReq): Observable<BuildCompBundleView[]> {
    return this.http.put<BuildCompBundleView[]>(`${this.baseUrl}/GetBuildCompBundleViews`, request);
  }
  getBuildCompBundleViewsPaging(request: PagingRequest<BuildCompBundleReq>): Observable<PagingResponse<BuildCompBundleView>> {
    return this.http.put<PagingResponse<BuildCompBundleView>>(`${this.baseUrl}/GetBuildCompBundleViewsPaging`, request);
  }
  setBuildCompBundleDto(request: BuildCompBundleDto): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/SetBuildCompBundleDto`, request);
  }
  //#endregion

  //#region BuildComponent
  getBuildComponentDtoById(id: number): Observable<BuildComponentDto> {
    return this.http.get<BuildComponentDto>(`${this.baseUrl}/GetBuildComponentDtoById/${id}`);
  }
  getBuildComponentViewById(id: number): Observable<BuildComponentView> {
    return this.http.get<BuildComponentView>(`${this.baseUrl}/GetBuildComponentViewById/${id}`);
  }
  getBuildComponentViews(request: BuildComponentReq): Observable<BuildComponentView[]> {
    return this.http.put<BuildComponentView[]>(`${this.baseUrl}/GetBuildComponentViews`, request);
  }
  getBuildComponentViewsPaging(request: PagingRequest<BuildComponentReq>): Observable<PagingResponse<BuildComponentView>> {
    return this.http.put<PagingResponse<BuildComponentView>>(`${this.baseUrl}/GetBuildComponentViewsPaging`, request);
  }
  uploadBuildComponentDto(request: UploadFormReq): Observable<BuildComponentDto> {
    return this.http.post<BuildComponentDto>(`${this.baseUrl}/UploadBuildComponentDto`, request);
  }
  //#endregion

  //#region BuildProject
  getBuildProjectDtoById(id: number): Observable<BuildProjectDto> {
    return this.http.get<BuildProjectDto>(`${this.baseUrl}/GetBuildProjectDtoById/${id}`);
  }
  getBuildProjectViewById(id: number): Observable<BuildProjectView> {
    return this.http.get<BuildProjectView>(`${this.baseUrl}/GetBuildProjectViewById/${id}`);
  }
  getBuildProjectViewsPaging(request: PagingRequest<BuildProjectReq>): Observable<PagingResponse<BuildProjectView>> {
    return this.http.put<PagingResponse<BuildProjectView>>(`${this.baseUrl}/GetBuildProjectViewsPaging`, request);
  }
  deleteBuildProject(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/DeleteBuildProject/${id}`);
  }
  uploadBuildProjectDto(request: UploadFormReq): Observable<BuildProjectDto> {
    return this.http.post<BuildProjectDto>(`${this.baseUrl}/UploadBuildProjectDto`, request);
  }
  uploadBuildProjectBaseMapAtt(request: UploadFormReq): Observable<BuildProjectDto> {
    return this.http.post<BuildProjectDto>(`${this.baseUrl}/UploadBuildProjectBaseMapAtt`, request);
  }
  //#endregion

  //#region BuildProjDoc
  getOptimalBuildProjDocAnalyseResult(buildProjectId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/GetOptimalBuildProjDocAnalyseResult/${buildProjectId}`);
  }
  deleteBuildProjDoc(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/DeleteBuildProjDoc/${id}`);
  }
  uploadBuildProjDocDtos(request: UploadFormReq): Observable<BuildProjDocDto[]> {
    return this.http.post<BuildProjDocDto[]>(`${this.baseUrl}/UploadBuildProjDocDtos`, request);
  }
  //#endregion

  //#region BuildProjRender
  getBuildProjRenderViewsByVolumeId(volumeId: number): Observable<BuildProjRenderView[]> {
    return this.http.get<BuildProjRenderView[]>(`${this.baseUrl}/GetBuildProjRenderViewsByVolumeId/${volumeId}`);
  }
  getBuildProjRenderViewsPaging(request: PagingRequest<BuildProjRenderReq>): Observable<PagingResponse<BuildProjRenderView>> {
    return this.http.put<PagingResponse<BuildProjRenderView>>(`${this.baseUrl}/GetBuildProjRenderViewsPaging`, request);
  }
  deleteBuildProjRender(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/DeleteBuildProjRender/${id}`);
  }
  uploadBuildProjRenderDto(request: UploadFormReq): Observable<BuildProjRenderDto> {
    return this.http.post<BuildProjRenderDto>(`${this.baseUrl}/UploadBuildProjRenderDto`, request);
  }
  //#endregion

  //#region BuildProjVolume
  getBuildProjVolumeViewsByProjectId(projectId: number): Observable<BuildProjVolumeView[]> {
    return this.http.get<BuildProjVolumeView[]>(`${this.baseUrl}/GetBuildProjVolumeViewsByProjectId/${projectId}`);
  }
  getBuildProjVolumeViewsPaging(request: PagingRequest<BuildProjVolumeReq>): Observable<PagingResponse<BuildProjVolumeView>> {
    return this.http.put<PagingResponse<BuildProjVolumeView>>(`${this.baseUrl}/GetBuildProjVolumeViewsPaging`, request);
  }
  deleteBuildProjVolume(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/DeleteBuildProjVolume/${id}`);
  }
  setBuildProjVolumeDto(request: BuildProjVolumeDto): Observable<BuildProjVolumeDto> {
    return this.http.post<BuildProjVolumeDto>(`${this.baseUrl}/SetBuildProjVolumeDto`, request);
  }
  uploadBuildProjVolumeDto(request: UploadFormReq): Observable<BuildProjVolumeDto> {
    return this.http.post<BuildProjVolumeDto>(`${this.baseUrl}/UploadBuildProjVolumeDto`, request);
  }
  uploadBuildProjVolumeDtos(request: UploadFormReq): Observable<BuildProjVolumeDto[]> {
    return this.http.post<BuildProjVolumeDto[]>(`${this.baseUrl}/UploadBuildProjVolumeDtos`, request);
  }
  uploadBuildProjVolumeResultAtt(request: UploadFormReq): Observable<BuildProjVolumeDto> {
    return this.http.post<BuildProjVolumeDto>(`${this.baseUrl}/UploadBuildProjVolumeResultAtt`, request);
  }
  //#endregion

}
