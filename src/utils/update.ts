import { execSync } from 'child_process'
export const updateNpm = () => {
	execSync('npm version patch')
}
