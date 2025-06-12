document.addEventListener('DOMContentLoaded', () => {

    const cameraMotions = [
        { en: 'Static Shot', id: 'Gambar Diam' },
        { en: 'Pan Left', id: 'Geser Kiri' },
        { en: 'Pan Right', id: 'Geser Kanan' },
        { en: 'Tilt Up', id: 'Miring ke Atas' },
        { en: 'Tilt Down', id: 'Miring ke Bawah' },
        { en: 'Dolly In', id: 'Maju' },
        { en: 'Dolly Out', id: 'Mundur' },
        { en: 'Tracking Shot', id: 'Mengikuti Objek' },
        { en: 'Crane Shot', id: 'Tembakan Derek' },
        { en: 'Handheld Shot', id: 'Genggam Tangan' },
        { en: 'Zoom In', id: 'Perbesar' },
        { en: 'Zoom Out', id: 'Perkecil' },
        { en: '360 Orbit', id: 'Orbit 360' },
        { en: '3D Rotation', id: 'Rotasi 3D' },
        { en: 'Action Run', id: 'Lari Aksi' },
        { en: 'Agent Reveal', id: 'Penampakan Agen' },
        { en: 'Angel Wings', id: 'Sayap Malaikat' },
        { en: 'Arc Left', id: 'Busur Kiri' },
        { en: 'Arc Right', id: 'Busur Kanan' },
        { en: 'Bloom Mouth', id: 'Mulut Mekar' },
        { en: 'Buckle Up', id: 'Kencangkan Sabuk' },
        { en: 'Bullet Time', id: 'Waktu Peluru' },
        { en: 'Building Explosion', id: 'Ledakan Gedung' },
        { en: 'Car Chasing', id: 'Kejar-kejaran Mobil' },
        { en: 'Car Explosion', id: 'Ledakan Mobil' },
        { en: 'Car Grip', id: 'Cengkeraman Mobil' },
        { en: 'Crane Down', id: 'Derek Turun' },
        { en: 'Crane Over The Head', id: 'Derek di Atas Kepala' },
        { en: 'Crane Up', id: 'Derek Naik' },
        { en: 'Crash Zoom In', id: 'Zoom Tabrak Masuk' },
        { en: 'Crash Zoom Out', id: 'Zoom Tabrak Keluar' },
        { en: 'Datamosh', id: 'Datamosh' },
        { en: 'Dirty Lens', id: 'Lensa Kotor' },
        { en: 'Disintegration', id: 'Disintegrasi' },
        { en: 'Dolly Zoom In', id: 'Dolly Zoom Masuk' },
        { en: 'Dolly Zoom Out', id: 'Dolly Zoom Keluar' },
        { en: 'Double Dolly', id: 'Dolly Ganda' },
        { en: 'Dutch Angle', id: 'Sudut Belanda' },
        { en: 'Fisheye', id: 'Mata Ikan' },
        { en: 'Floating Fish', id: 'Ikan Melayang' },
        { en: 'Flood', id: 'Banjir' },
        { en: 'Floral Eyes', id: 'Mata Bunga' },
        { en: 'Flying', id: 'Terbang' },
        { en: 'Focus Change', id: 'Perubahan Fokus' },
        { en: 'FPV Drone', id: 'Drone FPV' },
        { en: 'Garden Bloom', id: 'Taman Mekar' },
        { en: 'General', id: 'Umum' },
        { en: 'Glam', id: 'Glamor' },
        { en: 'Glowshift', id: 'Pergeseran Cahaya' },
        { en: 'Handheld', id: 'Genggam' },
        { en: 'Head Tracking', id: 'Pelacakan Kepala' },
        { en: 'Head Explosion', id: 'Ledakan Kepala' },
        { en: 'Hyperlapse', id: 'Hyperlapse' },
        { en: 'Incline', id: 'Miring' },
        { en: 'Invisible', id: 'Tak Terlihat' },
        { en: 'Jelly Drift', id: 'Goyangan Jeli' },
        { en: 'Jib Down', id: 'Jib Turun' },
        { en: 'Jib Up', id: 'Jib Naik' },
        { en: 'Kiss', id: 'Cium' },
        { en: 'Lazy Susan', id: 'Lazy Susan' },
        { en: 'Lens Crack', id: 'Retak Lensa' },
        { en: 'Lens Flare', id: 'Suar Lensa' },
        { en: 'Levitation', id: 'Levitasi' },
        { en: 'Low Shutter', id: 'Rana Lambat' },
        { en: 'Medusa Gorgona', id: 'Medusa Gorgon' },
        { en: 'Melting', id: 'Meleleh' },
        { en: 'Morphskin', id: 'Kulit Berubah' },
        { en: 'Mouth In', id: 'Mulut Masuk' },
        { en: 'Push To Glass', id: 'Dorong ke Kaca' },
        { en: 'Rap Flex', id: 'Gaya Rap' },
        { en: 'Robo Arm', id: 'Lengan Robot' },
        { en: 'Skin Surge', id: 'Gelombang Kulit' },
        { en: 'Snorricam', id: 'Snorricam' },
        { en: 'Soul Jump', id: 'Lompatan Jiwa' },
        { en: 'Static', id: 'Statis' },
        { en: 'Super Dolly In', id: 'Super Dolly Masuk' },
        { en: 'Super Dolly Out', id: 'Super Dolly Keluar' },
        { en: 'Symbiote', id: 'Simbiosis' },
        { en: 'Tentacles', id: 'Tentakel' },
        { en: 'Thunder God', id: 'Dewa Petir' },
        { en: 'Tilt Down', id: 'Miring Turun' },
        { en: 'Tilt up', id: 'Miring Naik' },
        { en: 'Timelapse Human', id: 'Timelapse Manusia' },
        { en: 'Timelapse Landscape', id: 'Timelapse Pemandangan' },
        { en: 'Turning Metal', id: 'Logam Berputar' },
        { en: 'Whip Pan', id: 'Whip Pan' },
        { en: 'Wiggle', id: 'Bergoyang' },
        { en: 'Wind to Face', id: 'Angin ke Wajah' },
        { en: 'YoYo Zoom', id: 'Zoom YoYo' },
    ];

    const cameraSelect = document.getElementById('gerakanKamera');
    cameraMotions.forEach(motion => {
        const option = document.createElement('option');
        option.value = motion.en;
        option.textContent = `${motion.en} (${motion.id})`;
        cameraSelect.appendChild(option);
    });

    const getElementValue = (id) => document.getElementById(id).value.trim();

    document.getElementById('generateBtn').addEventListener('click', () => {
        const inputs = {
            judul: getElementValue('judulScane'),
            karakter: getElementValue('deskripsiKarakter'),
            suara: getElementValue('detailSuara'),
            aksi: getElementValue('aksiKarakter'),
            ekspresi: getElementValue('ekspresiKarakter'),
            latar: getElementValue('latarTempatWaktu'),
            gerakanKamera: getElementValue('gerakanKamera'),
            pencahayaan: getElementValue('pencahayaan'),
            gaya: getElementValue('gayaVideo'),
            kualitas: getElementValue('kualitasVisual'),
            suasana: getElementValue('suasana'),
            suaraLingkungan: getElementValue('suaraLingkungan'),
            dialog: getElementValue('dialogKarakter'),
            negatif: getElementValue('negativePrompt'),
        };

        // Generate Indonesian Prompt
        const promptID = `**Judul Scene:** ${inputs.judul}

**Karakter Konsisten:**
${inputs.karakter}

**Detail Suara Karakter:**
${inputs.suara}

**Aksi & Ekspresi:**
${inputs.aksi}. ${inputs.ekspresi}.

**Latar & Suasana:**
${inputs.latar}. Suasana keseluruhan adalah ${inputs.suasana}.

**Visual & Sinematografi:**
Gaya video adalah ${inputs.gaya} dengan kualitas ${inputs.kualitas}. Pencahayaan: ${inputs.pencahayaan}. Gerakan kamera: ${inputs.gerakanKamera}.

**Audio:**
Suara lingkungan (ambience): ${inputs.suaraLingkungan}.
${inputs.dialog}.

**Negative Prompt:**
${inputs.negatif}`;

        document.getElementById('outputIndonesia').value = promptID;

        // Generate English Prompt
        const promptEN = `**Scene Title:** A scene titled "${inputs.judul}".

**Consistent Character:**
A character with the following description:
${inputs.karakter}

**Character Voice Details:**
The character's voice is described as:
${inputs.suara}

**Action & Expression:**
The character performs the following action: "${inputs.aksi}".
The character shows the following expression: "${inputs.ekspresi}".

**Setting & Atmosphere:**
The setting is: "${inputs.latar}".
The overall atmosphere is "${inputs.suasana}".

**Visuals & Cinematography:**
The video style is **${inputs.gaya}** with **${inputs.kualitas}** quality.
- **Lighting:** ${inputs.pencahayaan}.
- **Camera Movement:** ${inputs.gerakanKamera}.

**Audio:**
- **Environmental Sound (Ambience):** ${inputs.suaraLingkungan}.
- **Dialogue (as spoken in Indonesian):** ${inputs.dialog.replace(/.*?:/g, '').trim()}

**Negative Prompt:**
Avoid the following: ${inputs.negatif}`;

        document.getElementById('outputInggris').value = promptEN;
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        const formElements = document.querySelectorAll('.form-container input, .form-container textarea, .form-container select');
        formElements.forEach(el => {
            if (el.type === 'select-one') {
                el.selectedIndex = 0;
            } else {
                el.value = '';
            }
        });
        document.getElementById('outputIndonesia').value = '';
        document.getElementById('outputInggris').value = '';
    });

    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const targetId = e.target.dataset.target;
            const textarea = document.getElementById(targetId);
            textarea.select();
            document.execCommand('copy');
            e.target.textContent = 'Disalin!';
            setTimeout(() => {
                e.target.textContent = 'Salin';
            }, 1500);
        });
    });
}); 