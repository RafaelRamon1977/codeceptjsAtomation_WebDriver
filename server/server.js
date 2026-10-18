export default async function bootstrap() {
    console.log('isso executou antes do projeto todo.')
}

export async function teardown() {
    console.log('isso executou depois do projeto todo.')
}