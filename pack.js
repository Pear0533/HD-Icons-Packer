const fs = require("fs");
const inputDir = './input';

const fileNames = fs.readdirSync(`${inputDir}`);
fileNames.forEach(name => {
	let rawName = name.replace(/\.[^/.]+$/, "");
	let outputDir = './output';
	if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
	let newFolderDir = `${outputDir}/${rawName}`;
	fs.mkdirSync(newFolderDir);
	let xmlStr =
	`<?xml version="1.0" encoding="utf-8"?>
	<tpf>
		<filename>${rawName}.tpf.dcx</filename>
		<compression>SekiroKRAK</compression>
		<encoding>0x01</encoding>
		<flag2>0x03</flag2>
		<textures>
			<texture>
				<name>${rawName}.dds</name>
				<format>0x66</format>
				<flags1>0x00</flags1>
				<flags2>0x00000000</flags2>
			</texture>
		</textures>
	</tpf>`;
	fs.writeFileSync(`${newFolderDir}/${name}`, fs.readFileSync(`${inputDir}/${name}`));
	fs.writeFileSync(`${newFolderDir}/_yabber-tpf.xml`, xmlStr);
});