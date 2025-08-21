export type VNMethod = 'off' | 'auto' | 'telex' | 'vni';

// Tone maps (bidirectional) and vowel-shape maps adapted from vn-keys.js
const mapSac: Record<string, string> = {
  "á": "a", "Á": "A", "ắ": "ă", "Ắ": "Ă", "ấ": "â", "Ấ": "Â",
  "é": "e", "É": "E", "ế": "ê", "Ế": "Ê", "í": "i", "Í": "I",
  "ó": "o", "Ó": "O", "ố": "ô", "Ố": "Ô", "ớ": "ơ", "Ớ": "Ơ",
  "ú": "u", "Ú": "U", "ứ": "ư", "Ứ": "Ư", "ý": "y", "Ý": "Y",
  "a": "á", "A": "Á", "ă": "ắ", "Ă": "Ắ", "â": "ấ", "Â": "Ấ",
  "e": "é", "E": "É", "ê": "ế", "Ê": "Ế", "i": "í", "I": "Í",
  "o": "ó", "O": "Ó", "ô": "ố", "Ô": "Ố", "ơ": "ớ", "Ơ": "Ớ",
  "u": "ú", "U": "Ú", "ư": "ứ", "Ư": "Ứ", "y": "ý", "Y": "Ý",
  "": ""
};

const mapHuyen: Record<string, string> = {
  "à": "a", "À": "A", "ằ": "ă", "Ằ": "Ă", "ầ": "â", "Ầ": "Â",
  "è": "e", "È": "E", "ề": "ê", "Ề": "Ê", "ì": "i", "Ì": "I",
  "ò": "o", "Ò": "O", "ồ": "ô", "Ồ": "Ô", "ờ": "ơ", "Ờ": "Ơ",
  "ù": "u", "Ù": "U", "ừ": "ư", "Ừ": "Ư", "ỳ": "y", "Ỳ": "Y",
  "a": "à", "A": "À", "ă": "ằ", "Ă": "Ằ", "â": "ầ", "Â": "Ầ",
  "e": "è", "E": "È", "ê": "ề", "Ê": "Ề", "i": "ì", "I": "Ì",
  "o": "ò", "O": "Ò", "ô": "ồ", "Ô": "Ồ", "ơ": "ờ", "Ơ": "Ờ",
  "u": "ù", "U": "Ù", "ư": "ừ", "Ư": "Ừ", "y": "ỳ", "Y": "Ỳ",
  "": ""
};

const mapHoi: Record<string, string> = {
  "ả": "a", "Ả": "A", "a": "ả", "A": "Ả",
  "ă": "ẳ", "Ă": "Ẳ", "Ẳ": "Ă", "ẳ": "ă",
  "â": "ẩ", "Â": "Ẩ", "Ẩ": "Â", "ẩ": "â",
  "ẻ": "e", "Ẻ": "E", "Ể": "Ê", "ể": "ê", "e": "ẻ", "E": "Ẻ", "ê": "ể", "Ê": "Ể",
  "Ỉ": "I", "ỉ": "i", "i": "ỉ", "I": "Ỉ",
  "ỏ": "o", "Ỏ": "O", "Ổ": "Ô", "ổ": "ô", "ở": "ơ", "Ở": "Ơ", "o": "ỏ", "O": "Ỏ", "ô": "ổ", "Ô": "Ổ", "ơ": "ở", "Ơ": "Ở",
  "ủ": "u", "Ủ": "U", "ử": "ư", "Ử": "Ư", "u": "ủ", "U": "Ủ", "ư": "ử", "Ư": "Ử",
  "Ỷ": "y", "ỷ": "y", "y": "ỷ", "Y": "Ỷ",
  "": ""
};

const mapNga: Record<string, string> = {
  "ã": "a", "Ã": "A", "a": "ã", "A": "Ã",
  "ă": "ẵ", "ẵ": "ă", "Ẵ": "Ă", "Ă": "Ẵ",
  "ẫ": "â", "Ẫ": "Â", "â": "ẫ", "Â": "Ẫ",
  "e": "ẽ", "E": "Ẽ", "ê": "ễ", "Ê": "Ễ", "ẽ": "e", "Ẽ": "E", "ễ": "ê", "Ễ": "Ê",
  "i": "ĩ", "I": "Ĩ", "ĩ": "i", "Ĩ": "I",
  "o": "õ", "O": "Õ", "õ": "o", "Õ": "O",
  "ô": "ỗ", "ỗ": "ô", "Ô": "Ỗ", "Ỗ": "Ô",
  "ơ": "ỡ", "Ơ": "Ỡ", "ỡ": "ơ", "Ỡ": "Ơ",
  "u": "ũ", "U": "Ũ", "ư": "ữ", "Ư": "Ữ", "ũ": "u", "Ũ": "U", "ữ": "ư", "Ữ": "Ư",
  "y": "ỹ", "Y": "Ỹ", "ỹ": "y", "Ỹ": "Y",
  "": ""
};

const mapNang: Record<string, string> = {
  "a": "ạ", "A": "Ạ", "ă": "ặ", "Ă": "Ặ", "â": "ậ", "Â": "Ậ",
  "e": "ẹ", "E": "Ẹ", "ê": "ệ", "Ê": "Ệ", "i": "ị", "I": "Ị",
  "o": "ọ", "O": "Ọ", "ô": "ộ", "Ô": "Ộ", "ơ": "ợ", "Ơ": "Ợ",
  "u": "ụ", "U": "Ụ", "ư": "ự", "Ư": "Ự", "y": "ỵ", "Y": "Ỵ",
  "ạ": "a", "Ạ": "A", "ặ": "ă", "Ặ": "Ă", "ậ": "â", "Ậ": "Ậ",
  "ẹ": "e", "Ẹ": "E", "ệ": "ê", "Ệ": "Ê", "ị": "i", "Ị": "I",
  "ọ": "o", "Ọ": "O", "ộ": "ô", "Ộ": "Ô", "ợ": "ơ", "Ợ": "Ơ",
  "ụ": "u", "Ụ": "U", "ự": "ư", "Ự": "Ư", "ỵ": "y", "Ỵ": "Y",
  "": ""
};

const mapMu: Record<string, string> = {
  "a": "â", "A": "Â", "o": "ô", "O": "Ô", "e": "ê", "E": "Ê",
  "â": "a", "Â": "A", "ô": "o", "Ô": "O", "ê": "e", "Ê": "E",
  "": ""
};

const mapMoc: Record<string, string> = {
  "o": "ơ", "O": "Ơ", "u": "ư", "U": "Ư", "": ""
};

const mapTrang: Record<string, string> = {
  "a": "ă", "A": "Ă", "ă": "a", "Ă": "A", "": ""
};

const mapNgang: Record<string, string> = {
  "d": "đ", "D": "Đ", "đ": "d", "Đ": "D", "": ""
};

const METHOD_MAPS: Record<'viqr' | 'vni' | 'telex' | 'auto', Record<string, number>> = {
  viqr: { "'": 1, "`": 2, "?": 3, "~": 4, ".": 5, "^": 6, "*": 7, "+": 7, "(": 8, "-": 9, d: 9, D: 9 },
  vni: { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9 },
  telex: { s: 1, f: 2, r: 3, x: 4, j: 5, a: 6, e: 6, o: 6, w: 7, d: 9 },
  auto: {}
};

// build auto map = union of viqr+vni+telex
(() => {
  const union: Record<string, number> = {};
  for (const k in METHOD_MAPS.viqr) union[k] = METHOD_MAPS.viqr[k as keyof typeof METHOD_MAPS.viqr];
  for (const k in METHOD_MAPS.vni) union[k] = METHOD_MAPS.vni[k as keyof typeof METHOD_MAPS.vni];
  for (const k in METHOD_MAPS.telex) if (union[k] == null) union[k] = METHOD_MAPS.telex[k as keyof typeof METHOD_MAPS.telex];
  METHOD_MAPS.auto = union;
})();

function getToneFromMethodChar(ch: string, method: VNMethod): number | undefined {
  if (method === 'off') return undefined;
  if (method === 'auto') return METHOD_MAPS.auto[ch];
  if (method === 'telex') return METHOD_MAPS.telex[ch];
  if (method === 'vni') return METHOD_MAPS.vni[ch];
  return undefined;
}

function applyMark(prevChar: string, mark: number, method: VNMethod): string | null {
  // 1:SAC 2:HUYEN 3:HOI 4:NGA 5:NANG 6:MU 7:MOC 8:TRANG 9:NGANG
  if (mark === 1) return mapSac[prevChar] ?? null;
  if (mark === 2) return mapHuyen[prevChar] ?? null;
  if (mark === 3) return mapHoi[prevChar] ?? null;
  if (mark === 4) return mapNga[prevChar] ?? null;
  if (mark === 5) return mapNang[prevChar] ?? null;
  if (mark === 6) return mapMu[prevChar] ?? null;
  if (mark === 7) {
    // Telex: aw => ă; otherwise horn
    if (method === 'telex' || method === 'auto') {
      if (prevChar === 'a' || prevChar === 'A') return mapTrang[prevChar] ?? null;
    }
    return mapMoc[prevChar] ?? null;
  }
  if (mark === 8) return mapTrang[prevChar] ?? null;
  if (mark === 9) return mapNgang[prevChar] ?? null;
  return null;
}

export function preprocessVN(prevValue: string, inputChar: string, method: VNMethod): { nextValue: string; handled: boolean } {
  if (method === 'off') return { nextValue: prevValue + inputChar, handled: false };
  if (inputChar === ' ' || inputChar === '\n' || inputChar === '\r') return { nextValue: prevValue + inputChar, handled: false };
  if (prevValue.length === 0) return { nextValue: prevValue + inputChar, handled: false };

  const tone = getToneFromMethodChar(inputChar, method);
  if (tone == null) {
    // Not a tone/shape input char, append normally
    return { nextValue: prevValue + inputChar, handled: false };
  }

  const prevChar = prevValue.charAt(prevValue.length - 1);
  if (prevChar === '\\') return { nextValue: prevValue + inputChar, handled: false };

  // Tone marks (1..5) should apply to the correct vowel in the last syllable
  if (tone >= 1 && tone <= 5) {
    const targetIndex = findToneTargetIndex(prevValue);
    if (targetIndex >= 0) {
      const ch = prevValue.charAt(targetIndex);
      const base = stripTone(ch);
      const toned = applyMark(base, tone, method);
      if (toned != null) {
        const nextValue = prevValue.slice(0, targetIndex) + toned + prevValue.slice(targetIndex + 1);
        return { nextValue, handled: true };
      }
    }
    // If we fail to find a target or mapping, append normally
    return { nextValue: prevValue + inputChar, handled: false };
  }

  // Shape marks (6..9) keep legacy behavior: apply to immediately previous char
  // Special-case Telex MU key: only apply if marker matches the previous base vowel (aa, ee, oo)
  if (tone === 6 && (method === 'telex' || method === 'auto')) {
    const isTelexMuKey = inputChar === 'a' || inputChar === 'A' || inputChar === 'e' || inputChar === 'E' || inputChar === 'o' || inputChar === 'O';
    if (isTelexMuKey) {
      const basePrev = stripTone(prevChar);
      if (basePrev.toLowerCase() !== inputChar.toLowerCase()) {
        // Not the same vowel: treat input as literal (fixes: a + o should become 'ao', not 'â')
        return { nextValue: prevValue + inputChar, handled: false };
      }
    }
  }
  const mapped = applyMark(prevChar, tone, method);
  if (mapped != null) {
    const nextValue = prevValue.slice(0, -1) + mapped;
    return { nextValue, handled: true };
  }
  return { nextValue: prevValue + inputChar, handled: false };
}

// --- Helpers for tone placement and stripping ---

// Build a base map for quick tone stripping that preserves vowel shape (â, ê, ô, ă, ơ, ư)
const baseVowels = [
  'a','ă','â','e','ê','i','o','ô','ơ','u','ư','y',
  'A','Ă','Â','E','Ê','I','O','Ô','Ơ','U','Ư','Y'
];

const toneMapsForward = [mapSac, mapHuyen, mapHoi, mapNga, mapNang];

const baseOfChar: Record<string, string> = {};
for (const b of baseVowels) {
  baseOfChar[b] = b;
  for (const tm of toneMapsForward) {
    const t = tm[b];
    if (t) baseOfChar[t] = b;
  }
}

function isVowelChar(ch: string): boolean {
  return baseOfChar[ch] != null || mapMu[ch] != null || mapMoc[ch] != null || mapTrang[ch] != null;
}

export function stripTone(ch: string): string {
  return baseOfChar[ch] ?? ch;
}

function findToneTargetIndex(prevValue: string): number {
  if (!prevValue) return -1;
  // Find start of last syllable (stop at first non-letter/digit combining character like space/punct)
  let i = prevValue.length - 1;
  while (i >= 0 && isWordChar(prevValue[i])) i--;
  const start = i + 1;
  const end = prevValue.length - 1;
  if (start > end) return -1;

  // Collect vowel positions in syllable
  const vowelPositions: number[] = [];
  for (let j = start; j <= end; j++) {
    if (isVowelChar(prevValue[j])) vowelPositions.push(j);
  }
  if (vowelPositions.length === 0) return -1;

  // Prefer shaped vowels (ă â ê ô ơ ư) if present
  for (const pos of vowelPositions) {
    const base = stripTone(prevValue[pos]);
    if (base === 'ă' || base === 'â' || base === 'ê' || base === 'ô' || base === 'ơ' || base === 'ư' ||
        base === 'Ă' || base === 'Â' || base === 'Ê' || base === 'Ô' || base === 'Ơ' || base === 'Ư') {
      return pos;
    }
  }
  // Otherwise, pick the first vowel in the syllable (works for sang->sáng, ua->ủa as requested)
  return vowelPositions[0];
}

function isWordChar(ch: string): boolean {
  // Allow Vietnamese letters and simple Latin letters; stop on spaces and punctuation/numbers
  // Simple heuristic: treat letters as word chars; numbers as boundary for tone placement
  if (!ch) return false;
  const code = ch.charCodeAt(0);
  // A-Z a-z
  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) return true;
  // Basic Latin-1 Supplement where Vietnamese characters live
  if (code >= 192 && code <= 7929) return true;
  return false;
}


