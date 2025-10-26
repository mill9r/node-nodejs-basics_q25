import { existsSync, mkdirSync } from 'node:fs';

export const isFileExist = (path, error) => existsSync(path);

export const createFolder = (path) => {
	if(isFileExist(path)) {
		return false
	}

	mkdirSync(path);

	return true
}