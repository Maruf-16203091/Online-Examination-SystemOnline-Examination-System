import { ResultComponent } from './results/result/result.component';
import { TrainingComponent } from './training/training.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StartQuizComponent } from './quizzes/start-quiz/start-quiz.component';
import { QuizDetailComponent } from './quizzes/quiz-detail/quiz-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';





const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },  // Dashboard Route
  { path: 'start-quiz', component: StartQuizComponent }, // Start Quiz Route
  { path: 'quiz-detail', component: QuizDetailComponent },  // quiz-detail Route
  { path: 'training', component: TrainingComponent },  // quiz-detail Route
  { path: 'result', component: ResultComponent },  // result Route
  { path: 'about-us', component: AboutUsComponent }, // about-us Route
  { path: 'contact-us', component: ContactUsComponent }, // contact-us Route
  { path: 'privacy-policy', component: PrivacyPolicyComponent }, // privacy-policy Route
  { path: 'terms-of-service', component: TermsOfServiceComponent }, // terms-of-service Route



  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // Default route to Dashboard
  { path: '**', redirectTo: '/dashboard' }  // Fallback route for any invalid paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
