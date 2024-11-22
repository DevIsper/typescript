import gulp from 'gulp';
import ts from 'gulp-typescript';
import babel from 'gulp-babel';

// Crie o projeto do TypeScript com as configurações do tsconfig.json
const tsProject = ts.createProject('tsconfig.json');

// Defina a tarefa do Gulp para compilar o TypeScript e passar pelo Babel
export const compilaTS = () => {
    return tsProject.src()
        .pipe(tsProject())         // Compila o TypeScript
        .pipe(babel())             // Passa pelo Babel
        .pipe(gulp.dest('build'));  // Salva na pasta 'dist'
};

// Função para observar mudanças nos arquivos TypeScript
function watchFiles() {
    gulp.watch('src/ts/**/*.ts', compilaTS);  // Quando um arquivo TS mudar, recompilar
}

// Tarefa padrão
export default gulp.series(compilaTS, watchFiles);
