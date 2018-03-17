export class Song{
    public _id : string;
    public name : string;
    public singer: string[];
    public chord_lyric: lyric_line[];
    public search_count: number;
    public main_tone:string;
    public rhythms:string;
    public used_chords:string[];
    public postser:string;
    public link : string;
}
interface lyric_line{
    sentences: string;
    chord: string;
}
